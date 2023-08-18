
import React from 'react'

export default function DropDown({isOpen}:{isOpen:boolean}) {
 



  return isOpen?(
  
    (
        <div
      style={{
        position: 'absolute',
        transform: 'translate(30px, -30px)',
        width: '100px',
      }}
    >
      <div
        style={{
          width: '100px',
          background: 'white', // Changed background color to white
          borderBottom: '1px solid lightgray', // Added light gray border
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onClick={(e:any) => console.log(e.target.innerText)}
        onMouseEnter={(e:any) => (e.target.style.backgroundColor = 'purple')}
        onMouseLeave={(e:any) => (e.target.style.backgroundColor = 'white')}
      >
        Trigger
      </div>
      <div
        style={{
          width: '100px',
          background: 'white', // Changed background color to white
          borderBottom: '1px solid lightgray', // Added light gray border
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          marginTop: '8px',
          marginBottom: '8px',
        }}
        onMouseEnter={(e:any) => (e.target.style.backgroundColor = 'purple')}
        onMouseLeave={(e:any) => (e.target.style.backgroundColor = 'white')}
      >
        Action
      </div>
      <div
        style={{
          width: '100px',
          background: 'white', // Changed background color to white
          borderBottom: '1px solid lightgray', // Added light gray border
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e:any) => (e.target.style.backgroundColor = 'purple')}
        onMouseLeave={(e:any) => (e.target.style.backgroundColor = 'white')}
      >
        LLM
      </div>
    </div>))
  :
  (<></>)
}
