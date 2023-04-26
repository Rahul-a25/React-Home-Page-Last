import React from 'react'
import './last.css'
const Last = () => {
  return (
    <div className='lastmain'>
       <div className='leftwala'>
          <h1 style={{color:"white"}}>About flex Bussines Pro</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem dignissimos impedit cupiditate nesciunt consequatur natus? Natus blanditiis quo veniam!</p>
       </div>
       <div className='middlewala'>
       <h1 style={{color:"white"}}>Recent Posts</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem dignissimos impedit cupiditate nesciunt consequatur natus? Natus blanditiis quo veniam!</p>
          {/* <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga porro excepturi quasi corporis dolor, alias sint ducimus impedit beatae. Adipisci!</span> */}
       </div>
       <div className='lastwala'>
        <h1 style={{color:"white"}}>Galleries</h1>
        <img width={200} src="https://lh6.ggpht.com/_f--g3whFLbk/Svooq5kY6_I/AAAAAAAAAb0/Dhpctqplj9A/s800/place_4-thumb.jpg" alt="" />
       </div>
    </div>
  )
}

export default Last
