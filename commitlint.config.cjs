module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'verify-issue-id': [2, 'always'],
      'header-max-length': [2, 'always', 200],
      'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    },
    plugins: [
      {
        rules: {
          'verify-issue-id': ({ subject }) => {
            const pattern = /\[TMSF-[0-9]{1,}\] -/g;
            return [
              pattern.test(subject),
              'Commit message must contain valid Issue ID. (e.g):- chore: [TMSF-1] - commit message',
            ];
          },
        },
      },
    ],
  };
  