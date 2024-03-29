import { Container } from '@mui/material';
import React from 'react';
import StepForm from './StepForm';

const Step3 = (props) => {
  return (
    <Container>
      <StepForm
        {...props}
        title='Skills'
        description={`This is about your ability to complete a task based on the learning you acquired formally or informally.`}
        groupBy={(option) => option.category}
        multiple
        options={[
          { name: 'Time management', category: 'Soft skills' },
          { name: 'Effective communication', category: 'Soft skills' },
          { name: 'Emotional intelligence', category: 'Soft skills' },
          { name: 'Conflict management', category: 'Soft skills' },
          { name: 'Teamwork skills', category: 'Soft skills' },
          { name: 'Stress management', category: 'Soft skills' },
          { name: 'Problem-solving', category: 'Soft skills' },
          { name: 'Productivity & organization', category: 'Soft skills' },
          { name: 'Critical thinking', category: 'Soft skills' },
          { name: 'Attention to detail', category: 'Soft skills' },

          {
            name: 'Social media and mobile marketing',
            category: 'Marketing Skills',
          },
          {
            name: 'Paid social media advertisements',
            category: 'Marketing Skills',
          },
          { name: 'B2B Marketing', category: 'Marketing Skills' },
          { name: 'The 4 P-s of Marketing', category: 'Marketing Skills' },
          { name: 'Consumer Behavior Drivers', category: 'Marketing Skills' },
          { name: 'Brand management', category: 'Marketing Skills' },
          { name: 'Creativity', category: 'Marketing Skills' },
          { name: 'Copywriting', category: 'Marketing Skills' },
          { name: 'Storytelling', category: 'Marketing Skills' },
          { name: 'Email marketing', category: 'Marketing Skills' },

          { name: 'Emotional Intelligence', category: 'Management Skills' },
          {
            name: 'Dealing with work-related stress',
            category: 'Management Skills',
          },
          { name: 'Motivation', category: 'Management Skills' },
          { name: 'Task delegation', category: 'Management Skills' },
          { name: 'Technological savviness', category: 'Management Skills' },
          { name: 'People management', category: 'Management Skills' },
          { name: 'Business Development', category: 'Management Skills' },
          { name: 'Strategic Management', category: 'Management Skills' },
          { name: 'Planning', category: 'Management Skills' },
          { name: 'Proposal writing', category: 'Management Skills' },
          { name: 'Problem-solving', category: 'Management Skills' },
          { name: 'Innovation', category: 'Management Skills' },
          { name: 'Charisma', category: 'Management Skills' },

          {
            name: 'Customer Relationship Management (CRM)',
            category: 'Sales Skills',
          },
          { name: 'Cold-calling', category: 'Sales Skills' },
          { name: 'Negotiation', category: 'Sales Skills' },
          { name: 'Public speaking', category: 'Sales Skills' },
          { name: 'Closing', category: 'Sales Skills' },
          { name: 'Lead generation', category: 'Sales Skills' },
          { name: 'Buyer-Responsive selling', category: 'Sales Skills' },
          { name: 'Buyer engagement', category: 'Sales Skills' },
          { name: 'Product knowledge', category: 'Sales Skills' },
          { name: 'Persuasion', category: 'Sales Skills' },
          {
            name: 'Effective communication and sociability',
            category: 'Sales Skills',
          },
          { name: 'Empathy', category: 'Sales Skills' },
          {
            name: 'Social media/digital communication',
            category: 'Sales Skills',
          },
          { name: 'Teamwork', category: 'Sales Skills' },
          { name: 'Time management', category: 'Sales Skills' },

          { name: 'Infographics', category: 'Design Skills' },
          { name: 'HTML & CSS', category: 'Design Skills' },
          { name: 'Photo editing', category: 'Design Skills' },
          { name: 'Storyboarding', category: 'Design Skills' },
          {
            name: 'Targeting and marketing through visual communications',
            category: 'Design Skills',
          },
          { name: 'Digital printing', category: 'Design Skills' },
          {
            name: 'Integration of visual communication in social media platforms',
            category: 'Design Skills',
          },
          { name: 'Creativity', category: 'Design Skills' },
          {
            name: 'Attention to detail & aesthetics',
            category: 'Design Skills',
          },
          { name: 'Interactive media design', category: 'Design Skills' },
          { name: 'Color sense & theory', category: 'Design Skills' },
          { name: 'Ad design', category: 'Design Skills' },
          { name: 'Active listening', category: 'Design Skills' },
          {
            name: 'Microsoft Office Pack: Word, Excel, Access, Publisher, Outlook, Powerpoint',
            category: 'Design Skills',
          },
          { name: 'Research and data analysis', category: 'Design Skills' },
          {
            name: 'Basic knowledge of user interface communication',
            category: 'Design Skills',
          },
          { name: 'Technical writing', category: 'Design Skills' },

          {
            name: 'Microsoft Excel (Advanced)',
            category: 'Accounting & Finance Skills',
          },
          {
            name: 'Enterprise Resource Planning',
            category: 'Accounting & Finance Skills',
          },
          {
            name: 'Big Data Analysis & SQL',
            category: 'Accounting & Finance Skills',
          },
          { name: 'Visual Basic', category: 'Accounting & Finance Skills' },
          {
            name: 'Accounting Software',
            category: 'Accounting & Finance Skills',
          },
          {
            name: 'General business knowledge',
            category: 'Accounting & Finance Skills',
          },
          {
            name: 'Numerical competence',
            category: 'Accounting & Finance Skills',
          },
          { name: 'Accuracy', category: 'Accounting & Finance Skills' },

          { name: 'Artificial Intelligence', category: 'Technology Skills' },
          { name: 'AI', category: 'Technology Skills' },
          { name: 'Machine Learning', category: 'Technology Skills' },
          { name: 'Deep Learning', category: 'Technology Skills' },
          { name: 'Internet of Things', category: 'Technology Skills' },
          { name: 'IOT', category: 'Technology Skills' },
          { name: 'IIOT & Sensors & Wearables', category: 'Technology Skills' },
          { name: 'Mobile & Social Internet', category: 'Technology Skills' },
          { name: 'Advancements', category: 'Technology Skills' },
          { name: 'Social Networks/Media', category: 'Technology Skills' },
          { name: 'Search', category: 'Technology Skills' },
          { name: 'Messaging', category: 'Technology Skills' },
          { name: 'Live Streams', category: 'Technology Skills' },
          { name: 'Blockchain', category: 'Technology Skills' },
          { name: 'Cryptocurrencies', category: 'Technology Skills' },
          { name: 'Distributed Ledger Systems', category: 'Technology Skills' },
          { name: 'DAOs', category: 'Technology Skills' },
          { name: 'DApps', category: 'Technology Skills' },
          { name: 'Big Data', category: 'Technology Skills' },
          { name: 'Apps', category: 'Technology Skills' },
          { name: 'Infrastructure', category: 'Technology Skills' },
          { name: 'Predictive Analytics', category: 'Technology Skills' },
          { name: 'Automation', category: 'Technology Skills' },
          { name: 'Information', category: 'Technology Skills' },
          { name: 'Decision & Action', category: 'Technology Skills' },
          { name: 'Robots', category: 'Technology Skills' },
          { name: 'Drones', category: 'Technology Skills' },
          { name: 'Autonomous Vehicles', category: 'Technology Skills' },
          {
            name: 'Consumer/Commercial/Industrial Robots',
            category: 'Technology Skills',
          },
          { name: 'Robotics', category: 'Technology Skills' },
          { name: 'Immersive Media', category: 'Technology Skills' },
          { name: 'VR', category: 'Technology Skills' },
          { name: 'AR', category: 'Technology Skills' },
          { name: 'MR', category: 'Technology Skills' },
          {
            name: 'Mobile Technologies & Advancements',
            category: 'Technology Skills',
          },
          { name: 'Networks', category: 'Technology Skills' },
          { name: 'services & devices', category: 'Technology Skills' },
          { name: 'Cloud Computing', category: 'Technology Skills' },
          { name: 'Software-as-Service (SaaS)', category: 'Technology Skills' },
          {
            name: 'Infrastructure-as-a-Service (IaaS)',
            category: 'Technology Skills',
          },
          {
            name: 'Platform-as-a-Service (PaaS)',
            category: 'Technology Skills',
          },
          { name: 'MESH Apps', category: 'Technology Skills' },
          { name: '3D Printing', category: 'Technology Skills' },
          { name: 'Additive Manufacturing', category: 'Technology Skills' },
          { name: 'Rapid Prototyping', category: 'Technology Skills' },
          { name: 'Customer Journey,', category: 'Technology Skills' },
          { name: 'Customer Experience', category: 'Technology Skills' },
          { name: 'Personalization', category: 'Technology Skills' },
          { name: 'Commerce Tools', category: 'Technology Skills' },
          { name: 'EnergyTech', category: 'Technology Skills' },
          { name: 'Data Storage', category: 'Technology Skills' },
          { name: 'Decentralized Grid', category: 'Technology Skills' },
          { name: 'Cybersecurity', category: 'Technology Skills' },
          { name: 'Adaptive Security', category: 'Technology Skills' },
          { name: 'Security', category: 'Technology Skills' },
          { name: 'Intelligence Detection', category: 'Technology Skills' },
          { name: 'Remediation & Adaptation', category: 'Technology Skills' },
          { name: 'Voice Assistants', category: 'Technology Skills' },
          { name: 'Interfaces', category: 'Technology Skills' },
          { name: 'Chatbots', category: 'Technology Skills' },
          {
            name: 'Natural Language Processing',
            category: 'Technology Skills',
          },
          { name: 'Nanotechnology', category: 'Technology Skills' },
          { name: 'Computing', category: 'Technology Skills' },
          { name: 'Medicine', category: 'Technology Skills' },
          { name: 'Machines / Smart Dust', category: 'Technology Skills' },
          { name: 'CollaborativeTech', category: 'Technology Skills' },
          { name: 'CrowdSharing', category: 'Technology Skills' },
          { name: 'Workplace', category: 'Technology Skills' },
          {
            name: 'Open Source Platforms & Tools',
            category: 'Technology Skills',
          },
          { name: 'Health Tech', category: 'Technology Skills' },
          { name: 'Advanced Genomics', category: 'Technology Skills' },
          { name: 'Bionics', category: 'Technology Skills' },
          { name: 'Health Care Tech.', category: 'Technology Skills' },
          { name: 'Human-Computer Interaction', category: 'Technology Skills' },
          { name: 'Facial/Gesture Recognition', category: 'Technology Skills' },
          { name: 'Biometrics', category: 'Technology Skills' },
          { name: 'Gaze Tracking', category: 'Technology Skills' },
          { name: 'Geo-spatial Tech', category: 'Technology Skills' },
          { name: 'GIS', category: 'Technology Skills' },
          { name: 'GPS', category: 'Technology Skills' },
          { name: 'Mapping & Remote Sensing', category: 'Technology Skills' },
          { name: 'Scanning', category: 'Technology Skills' },
          { name: 'Navigation', category: 'Technology Skills' },
          { name: 'Advanced Materials', category: 'Technology Skills' },
          { name: 'Composite', category: 'Technology Skills' },
          { name: 'Alloys', category: 'Technology Skills' },
          { name: 'Polymers', category: 'Technology Skills' },
          { name: 'Biomimicry', category: 'Technology Skills' },
          { name: 'Nanomanufacturing', category: 'Technology Skills' },
          { name: 'New Touch Interfaces', category: 'Technology Skills' },
          { name: 'Touch Screens', category: 'Technology Skills' },
          { name: 'Haptics', category: 'Technology Skills' },
          { name: '3D Touch', category: 'Technology Skills' },
          { name: 'Paper', category: 'Technology Skills' },
          { name: 'Feedback & Exoskeletons', category: 'Technology Skills' },
          { name: 'Wireless Power', category: 'Technology Skills' },
          { name: 'Clean Tech', category: 'Technology Skills' },
          {
            name: 'Bio-/Enviro-Materials + Solutions',
            category: 'Technology Skills',
          },
          { name: 'Sustainability', category: 'Technology Skills' },
          { name: 'Treatment & Efficiency', category: 'Technology Skills' },
          { name: 'Quantum Computing', category: 'Technology Skills' },
          { name: 'Exascale Computing', category: 'Technology Skills' },
          { name: 'Smart Cities', category: 'Technology Skills' },
          { name: 'Infrastructure & Transport', category: 'Technology Skills' },
          { name: 'Edge/Fog Computing', category: 'Technology Skills' },
          { name: 'Faster, Better Internet', category: 'Technology Skills' },
          { name: 'Broadband', category: 'Technology Skills' },
          { name: 'Fiber', category: 'Technology Skills' },
          { name: '5G', category: 'Technology Skills' },
          { name: 'Li-Fi', category: 'Technology Skills' },
          { name: 'LPN', category: 'Technology Skills' },
          { name: 'LoRa', category: 'Technology Skills' },
          { name: 'Proximity Tech', category: 'Technology Skills' },
          { name: 'Beacons', category: 'Technology Skills' },
          { name: 'RFID', category: 'Technology Skills' },
          { name: 'Wi-Fi', category: 'Technology Skills' },
          {
            name: 'Near-Field Communications & Geofencing',
            category: 'Technology Skills',
          },
          { name: 'New Screens', category: 'Technology Skills' },
          { name: 'next evolution TVs', category: 'Technology Skills' },
          { name: 'Digital Signage', category: 'Technology Skills' },
          { name: 'OOH', category: 'Technology Skills' },
          { name: 'MicroLEDS', category: 'Technology Skills' },
          { name: 'Projections', category: 'Technology Skills' },
          { name: 'Fashion Tech', category: 'Technology Skills' },
          { name: 'Smart fabrics', category: 'Technology Skills' },
          { name: 'interactive textiles', category: 'Technology Skills' },
          { name: 'wearables', category: 'Technology Skills' },

          {
            name: 'SQL (a must) and Hive (optional)',
            category: 'Business Analytics',
          },
          {
            name: 'Programming language (R, Python, Scala, Matlab)',
            category: 'Business Analytics',
          },
          { name: 'STATA, SPSS, SAS', category: 'Business Analytics' },
          { name: 'Data Mapping', category: 'Business Analytics' },
          {
            name: 'Entity Relationship Diagrams',
            category: 'Business Analytics',
          },
          { name: 'Wireframes', category: 'Business Analytics' },
          { name: 'Big Data tools', category: 'Business Analytics' },
          { name: 'Microsoft Visio', category: 'Business Analytics' },
          { name: 'Agile Business Analysis', category: 'Business Analytics' },
          { name: 'Machine learning', category: 'Business Analytics' },
          { name: 'System Context Diagrams', category: 'Business Analytics' },
          { name: 'Business Process Modeling', category: 'Business Analytics' },
          {
            name: 'Technical and non-technical communication',
            category: 'Business Analytics',
          },

          { name: 'HTML/CSS', category: 'Web Development Skills' },
          { name: 'CSS', category: 'Web Development Skills' },
          { name: 'Javascript', category: 'Web Development Skills' },
          { name: 'Wordpress', category: 'Web Development Skills' },
          {
            name: 'Graphic User Interfaces (GUI)',
            category: 'Web Development Skills',
          },
          {
            name: 'Git/Version control (Github, gitlab)',
            category: 'Web Development Skills',
          },
          {
            name: 'Search Engine Optimization (SEO)',
            category: 'Web Development Skills',
          },
          {
            name: 'Application Programming Interface (API)',
            category: 'Web Development Skills',
          },
          {
            name: 'Adobe Photoshop, InDesign',
            category: 'Web Development Skills',
          },
          {
            name: 'Content Management Systems (CMS)',
            category: 'Web Development Skills',
          },
          { name: 'Testing/Debugging', category: 'Web Development Skills' },
          {
            name: 'Responsive design principles',
            category: 'Web Development Skills',
          },
          { name: 'ReactJs', category: 'Web Development Skills' },
          { name: 'UI/UX', category: 'Web Development Skills' },
          { name: 'PHP', category: 'Web Development Skills' },
          { name: 'Python', category: 'Web Development Skills' },
        ]}
      />
    </Container>
  );
};

export default Step3;
