export default function Expertise() {
  const expertiseList = [
    'Product Development',
    'Product Design',
    'Community management',
    'Strategy',
    'Governance',
    'Product Design',
    'Product Development',
    'Product Design',
    'Product Development',
    'Product Design',
  ];
  return (
    <section className='float-right'>
      <div className='-tracking-0.01'>
        <h4 className='text-2xl text-muted-300'>Expertise</h4>
        <div className='grid grid-cols-1 mt-5 gap-y-3'>
          {expertiseList.map((expertise, index) => (
            <h5
              key={index}
              className='text-xl leading-8 border-b border-muted-100 w-70w'
            >
              {expertise}
            </h5>
          ))}
        </div>
      </div>
    </section>
  );
}
