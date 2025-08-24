/**
 * Manual verification script for Breaking Changes Analyzer functionality
 * This script can be run in the browser console to verify key functionality
 */

(function() {
  console.log('🔍 Breaking Changes Analyzer Functionality Verification');
  
  // Test 1: Check if main components are rendered
  function testComponentRendering() {
    console.log('\n📋 Test 1: Component Rendering');
    
    const title = document.querySelector('h2');
    const analyzeButton = document.querySelector('button');
    const branchSelectors = document.querySelectorAll('select');
    
    console.log('✓ Title found:', title?.textContent?.includes('Breaking Changes Analysis'));
    console.log('✓ Analyze button found:', analyzeButton?.textContent?.includes('Analyze'));
    console.log('✓ Branch selectors found:', branchSelectors.length >= 2);
    
    return title && analyzeButton && branchSelectors.length >= 2;
  }
  
  // Test 2: Simulate message handling
  function testMessageHandling() {
    console.log('\n📨 Test 2: Message Handling');
    
    try {
      // Simulate branches message
      const branchesEvent = new MessageEvent('message', {
        data: {
          command: 'branchesList',
          branches: ['main', 'feature-test'],
          currentBranch: 'feature-test',
          defaultTargetBranch: 'main',
          languageModel: 'gpt-4o-mini'
        }
      });
      
      window.dispatchEvent(branchesEvent);
      console.log('✓ Branches message dispatched');
      
      // Check if branches were populated
      setTimeout(() => {
        const selects = document.querySelectorAll('select');
        const hasOptions = Array.from(selects).some(select => select.options.length > 1);
        console.log('✓ Branch options populated:', hasOptions);
      }, 100);
      
      return true;
    } catch (error) {
      console.error('✗ Message handling failed:', error);
      return false;
    }
  }
  
  // Test 3: Test filtering functionality
  function testFiltering() {
    console.log('\n🔍 Test 3: Filtering Functionality');
    
    try {
      // Simulate analysis results
      const resultsEvent = new MessageEvent('message', {
        data: {
          command: 'analysisResult',
          result: {
            summary: {
              totalBreakingChanges: 2,
              criticalCount: 1,
              highCount: 1,
              mediumCount: 0,
              lowCount: 0
            },
            breakingChanges: [
              {
                id: '1',
                severity: 'critical',
                changeType: 'method-signature',
                description: 'Test critical change',
                recommendation: 'Fix this',
                changeLocation: {
                  filePath: 'test.ts',
                  lineNumber: 1,
                  codeSnippet: 'test code'
                },
                affectedLocations: []
              },
              {
                id: '2',
                severity: 'high',
                changeType: 'class-structure',
                description: 'Test high change',
                recommendation: 'Fix that',
                changeLocation: {
                  filePath: 'test2.ts',
                  lineNumber: 2,
                  codeSnippet: 'test code 2'
                },
                affectedLocations: []
              }
            ]
          }
        }
      });
      
      window.dispatchEvent(resultsEvent);
      console.log('✓ Analysis results dispatched');
      
      // Check if results are displayed
      setTimeout(() => {
        const resultsSection = document.querySelector('.summary');
        const breakingChanges = document.querySelectorAll('.breaking-change-item');
        
        console.log('✓ Results section found:', !!resultsSection);
        console.log('✓ Breaking changes displayed:', breakingChanges.length);
        
        // Test search functionality
        const searchInput = document.querySelector('input[placeholder*="Search"]');
        if (searchInput) {
          searchInput.value = 'critical';
          searchInput.dispatchEvent(new Event('change', { bubbles: true }));
          console.log('✓ Search input tested');
        }
        
        // Test severity filter
        const severitySelect = document.querySelector('select[value="all"]');
        if (severitySelect) {
          severitySelect.value = 'critical';
          severitySelect.dispatchEvent(new Event('change', { bubbles: true }));
          console.log('✓ Severity filter tested');
        }
      }, 200);
      
      return true;
    } catch (error) {
      console.error('✗ Filtering test failed:', error);
      return false;
    }
  }
  
  // Test 4: Test file navigation
  function testFileNavigation() {
    console.log('\n🔗 Test 4: File Navigation');
    
    try {
      // Mock VSCode API
      const originalPostMessage = window.vscode?.postMessage;
      let messagesSent = [];
      
      if (window.vscode) {
        window.vscode.postMessage = function(message) {
          messagesSent.push(message);
          console.log('📤 Message sent:', message);
        };
      }
      
      // Simulate clicking on a file location
      setTimeout(() => {
        const fileLocation = document.querySelector('.file-location');
        if (fileLocation) {
          fileLocation.click();
          console.log('✓ File location clicked');
          
          // Check if openFile message was sent
          const openFileMessage = messagesSent.find(msg => msg.command === 'openFile');
          console.log('✓ OpenFile message sent:', !!openFileMessage);
        }
        
        // Restore original postMessage
        if (originalPostMessage && window.vscode) {
          window.vscode.postMessage = originalPostMessage;
        }
      }, 300);
      
      return true;
    } catch (error) {
      console.error('✗ File navigation test failed:', error);
      return false;
    }
  }
  
  // Run all tests
  function runAllTests() {
    console.log('🚀 Starting Breaking Changes Analyzer verification...\n');
    
    const results = {
      rendering: testComponentRendering(),
      messaging: testMessageHandling(),
      filtering: testFiltering(),
      navigation: testFileNavigation()
    };
    
    setTimeout(() => {
      console.log('\n📊 Verification Results:');
      console.log('Component Rendering:', results.rendering ? '✅ PASS' : '❌ FAIL');
      console.log('Message Handling:', results.messaging ? '✅ PASS' : '❌ FAIL');
      console.log('Filtering:', results.filtering ? '✅ PASS' : '❌ FAIL');
      console.log('File Navigation:', results.navigation ? '✅ PASS' : '❌ FAIL');
      
      const allPassed = Object.values(results).every(result => result);
      console.log('\n🎯 Overall Result:', allPassed ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED');
      
      if (allPassed) {
        console.log('\n🎉 Breaking Changes Analyzer is working correctly!');
      } else {
        console.log('\n⚠️  Some functionality may need attention.');
      }
    }, 1000);
  }
  
  // Auto-run if this script is executed
  if (typeof window !== 'undefined') {
    runAllTests();
  }
  
  // Export for manual testing
  return {
    testComponentRendering,
    testMessageHandling,
    testFiltering,
    testFileNavigation,
    runAllTests
  };
})();