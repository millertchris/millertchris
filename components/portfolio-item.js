import Link from 'next/link';

export default function PortfolioItem() {
  return (
    <div className='item'>
      <div className='image'>
        <Image
          src='/images/old-forester-website.jpeg'
          alt='Old Forester Website'
          placeholder='blur'
          blurDataURL='/images/Progressively-Loading-Images-With-Blur-Effect-min.png'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='content'>
        <h2 className='title'>Old Forester</h2>
      </div>
    </div>
  );
}
