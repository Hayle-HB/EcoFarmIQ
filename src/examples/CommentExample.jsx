import CommentSection from '../components/Comments/CommentSection';

const CommentExample = () => {
  const sampleComments = [
    {
      id: '1',
      user: {
        id: '2',
        name: 'Sarah Green',
        avatar: '/avatars/sarah.jpg',
        expertise: 'Hydroponics Expert'
      },
      content: 'The soil moisture sensors are showing great results with the new irrigation system! #SmartFarming #WaterManagement',
      category: 'tech',
      timestamp: new Date('2024-02-20'),
      likes: 15,
      replies: [],
      tags: ['#SmartFarming', '#WaterManagement'],
      isVerified: true
    },
    // Add more sample comments as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <CommentSection initialComments={sampleComments} />
    </div>
  );
};

export default CommentExample; 