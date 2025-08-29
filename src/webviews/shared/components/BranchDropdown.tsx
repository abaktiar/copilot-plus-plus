import React, { useEffect, useId, useRef, useState } from 'react';

interface BranchDropdownProps {
  branches: string[];
  selectedBranch: string;
  onBranchChange: (branch: string) => void;
  label: string;
  placeholder: string;
  currentBranch?: string;
}

export function BranchDropdown({
  branches,
  selectedBranch,
  onBranchChange,
  label,
  placeholder,
  currentBranch
}: BranchDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleBranchSelect = (branch: string) => {
    onBranchChange(branch);
    setIsOpen(false);
    setQuery('');
    setHighlightedIndex(-1);
  };

  const displayName = selectedBranch + (selectedBranch === currentBranch ? ' (current)' : '');

  const filteredBranches = branches.filter((b) => b.toLowerCase().includes(query.toLowerCase()));

  // Focus search when opening
  useEffect(() => {
    if (isOpen) {
      // Delay to ensure element is in DOM
      setTimeout(() => searchInputRef.current?.focus(), 0);
      // Initialize highlight to current selection if visible, else first
      const currentIndex = filteredBranches.findIndex((b) => b === selectedBranch);
      setHighlightedIndex(currentIndex >= 0 ? currentIndex : (filteredBranches.length > 0 ? 0 : -1));
    }
  }, [isOpen]);

  // Reset highlight when filter changes
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const currentIndex = filteredBranches.findIndex((b) => b === selectedBranch);
    if (currentIndex >= 0) {
      setHighlightedIndex(currentIndex);
    } else {
      setHighlightedIndex(filteredBranches.length > 0 ? 0 : -1);
    }
  }, [query]);

  const moveHighlight = (delta: number) => {
    if (filteredBranches.length === 0) {
      return;
    }
    setHighlightedIndex((prev) => {
      const next = prev < 0 ? 0 : (prev + delta + filteredBranches.length) % filteredBranches.length;
      return next;
    });
  };

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(true);
      // highlight set via useEffect when open
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        moveHighlight(1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        moveHighlight(-1);
        break;
      case 'Home':
        e.preventDefault();
        if (filteredBranches.length > 0) {
          setHighlightedIndex(0);
        }
        break;
      case 'End':
        e.preventDefault();
        if (filteredBranches.length > 0) {
          setHighlightedIndex(filteredBranches.length - 1);
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleBranchSelect(filteredBranches[highlightedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  return (
    <div className="branch-dropdown" ref={dropdownRef}>
      <button
        className={`branch-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleButtonKeyDown}
        title={`Click to select ${label} branch`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-label={`Select ${label} branch`}
      >
        <span className="branch-label">{label}:</span>
        <code className="branch-name">{displayName || placeholder}</code>
        <span className="dropdown-arrow">▼</span>
      </button>
      
      {isOpen && (
        <div
          className="branch-dropdown-menu"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              e.preventDefault();
              setIsOpen(false);
              setHighlightedIndex(-1);
            }
          }}
        >
          <div className="branch-search">
            <input
              ref={searchInputRef}
              className="branch-search-input"
              type="text"
              placeholder="Search branches"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              aria-controls={listboxId}
              aria-activedescendant={highlightedIndex >= 0 ? `${listboxId}-option-${highlightedIndex}` : undefined}
              aria-label="Search branches"
            />
          </div>
          <div
            className="branch-list"
            role="listbox"
            id={listboxId}
            aria-label={`${label} branch options`}
          >
            {filteredBranches.length === 0 ? (
              <div className="branch-empty" role="status" aria-live="polite">No matches</div>
            ) : (
              filteredBranches.map((branch, idx) => (
                <button
                  key={branch}
                  id={`${listboxId}-option-${idx}`}
                  className={`branch-option ${branch === selectedBranch ? 'selected' : ''} ${highlightedIndex === idx ? 'highlighted' : ''}`}
                  onClick={() => handleBranchSelect(branch)}
                  role="option"
                  aria-selected={branch === selectedBranch}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                >
                  {branch + (branch === currentBranch ? ' (current)' : '')}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
