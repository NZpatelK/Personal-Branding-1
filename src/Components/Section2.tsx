import React from 'react';

interface SectionProps {
  sectionNumber: number;
}

const Section2: React.FC<SectionProps> = ({ sectionNumber }) => {
  const backgroundColor = sectionNumber % 2 === 0 ? 'white' : 'black';
  const sectionId = `section${sectionNumber}`;

  return (
    <section
    id={sectionId}
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor,
      }}
    >
      <h2>Section {sectionNumber}</h2>
    </section>
  );
};

export default Section2;