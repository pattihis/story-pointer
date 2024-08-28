var questions = [
  {
    title: 'Do you know where this issue is coming from or this feature will originate from?',
    choices: { Yes: 0, No: 2 },
  },
  {
    title: 'Do you think caching is involved or will possibly be affected?',
    choices: { Yes: 2, No: 0 },
  },
  {
    title: 'Do you think performance could be affected/should be considered?',
    choices: { Yes: 2, No: 0 },
  },
  {
    title: 'How many codebases (e.g. plugins, services, apps) do you think this will touch?',
    choices: { One: 1, Two: 2, Three: 3, Four: 4, Five: 5, Six: 6 },
  },
  {
    title:
      'How much work will be required to reproduce the issue or see the feature run?',
    choices: { Little: 0, 'Some (existing setup)': 1, 'A lot (new setup)': 2 },
  },
  {
    title: 'Do you think this could be a PHP or WP version issue?',
    choices: { Yes: 1, No: 0 },
  },
  {
    title: 'How many additional codebases will you need to check your work on?',
    choices: { Zero: 0, One: 1, Two: 2, Three: 3, Four: 4, Five: 5 },
  },
  {
    title:
      'Do you think this will affect the visitor-facing (Read) or admin-facing (Write) part of the request?',
    choices: { Read: 1, Write: 0 },
  },
  {
    title: 'How many 3rd party plugins/themes are involved? (E.g. Elementor or WPML)',
    choices: { Zero: 0, One: 1, Two: 2, Three: 3, Four: 4, Five: 5 },
  },
  {
    title:
      'Do you think you will have to touch/update legacy code, i.e. code not covered by tests?',
    choices: { Yes: 2, No: 0 },
  },
  {
    title: 'Do you think all the foundational work/APIs needed are already there?',
    choices: { Yes: 0, No: 2 },
  },
  {
    title: 'Do you think all the test harnesses and utilities required are already there?',
    choices: { Yes: 0, No: 2 },
  },
  {
    title: 'How experienced or knowledgeable are you about this issue/language/technology?',
    choices: { Beginner: 3, Novice: 2, Intermediate: 1, Expert: 0 },
  },
];
