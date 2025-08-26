import React from 'react';
import JournalEditor from '../components/JournalEditor';
import JournalHistory from '../components/JournalHistory';

const JournalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-gray-900 px-4 py-6">
      {/* Journal Entry Form */}
      <JournalEditor />

      {/* Journal History Below */}
      <div className="mt-10">
        <JournalHistory />
      </div>
    </div>
  );
};

export default JournalPage;
