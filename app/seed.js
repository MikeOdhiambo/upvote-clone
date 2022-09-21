window.Seed = (function () {
  const submissions = [
    {
      id: 1,
      name: 'Michael Scott',
      post: 'Sometimes I\’ll start a sentence and I don\’t even know where it\’s going. I just hope I find it along the way',
      votes: 16,
      avatar: '../images/005.png',
    },
    {
      id: 2,
      name: 'Dwight Schrute',
      post: 'Identity theft is not a joke, Jim! Millions of families suffer every year.',
      votes: 11,
      avatar: '../images/008.jpg',
    },
    {
      id: 3,
      name: 'Jim Halpert',
      post: 'My roommate wants to meet everybody. Because I\’m pretty sure he thinks I\’m making Dwight up. He is very real.',
      votes: 17,
      avatar: '../images/012.jpeg',
    },
    {
      id: 4,
      name: 'Creed Bratton',
      post: 'If this gets out they won\'t let me scuba. If I can\'t scuba, what am I working toward?',
      votes: 9,
      avatar: '../images/033.jpg',
    },
	{
      id: 5,
      name: 'Pam Beesley',
      post: 'There\’s a lot of beauty in ordinary things. Isn\’t that kind of the point?',
      votes: 9,
      avatar: '../images/035.jpg',
    }
  ];

  return { submissions: submissions };
}());
