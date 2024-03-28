


export const Article = ({img, number, title, text}) => {
  return (
   <Article className='flex h-[162px] md:w-[343px] md:flex-grow'> 
    <div className='w-[100px]'>
    <img src={img} alt="imagen articulo 1" />
    </div>
    <div className='pl-6'>
     <p className='text-GrayishBlue text-3xl mb-[18px] font-bold'>{number}</p>
     <h2 className='font-bold mb-[18px] hover:text-SoftOrange cursor-pointer'>{title}</h2>
     <p className='text-DarkGrayishBlue text-[16px]'>{text}</p>
    </div>
   </Article>
  )
}

