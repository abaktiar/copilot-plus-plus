import React, { useState, useRef, useEffect } from 'react';

interface BranchDropdownProps {
  branches: string[];
  selectedBranch: string;
  onBranchChange: (branch: string) => void;
  label: string;
  placeholder: string;
}

export function BranchDropdown({
  branches,
  selectedBranch,
  onBranchChange,
  label,
  placeholder
}: BranchDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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
  };

  return (
    <div className="branch-dropdown" ref={dropdownRef}>
      <button
        className={`branch-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title={`Click to select ${label} branch`}
      >
        <span className="branch-label">{label}:</span>
        <code className="branch-name">{selectedBranch || placeholder}</code>
        <span className="dropdown-arrow">▼</span>
      </button>
      
      {isOpen && (
        <div className="branch-dropdown-menu">
          {branches.map((branch) => (
            <button
              key={branch}
              className={`branch-option ${branch === selectedBranch ? 'selected' : ''}`}
              onClick={() => handleBranchSelect(branch)}
            >
              {branch}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}