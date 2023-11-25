import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormTest from './test/FormTest'
import ConRender from './test/ConRender'
import AnimeBaground from './test/AnimeBaground'

// function VideoMod({masseag,Children}){
// return <button onClick={()=> alert(masseag)}>{Children}</button>
// }
// function App() {
//   const [count ,setCount]=useState(0)

//  function Button({onClick,text}){
//   return<>
//   <button onClick={onClick}>{text}</button>
//   </>
//  }
//  function Play(name){
//   let handelClick =()=>{
// alert(`play ${name}`)
//    console.log("ksjdbv");
//   }
//   return<>
//   <Button onClick={handelClick}>
//  text {name}
//     </Button>
//     </>
//  }

//  return <>
//  <VideoMod masseag={"play mod"}>play </VideoMod>
// <VideoMod masseag={"game mod on"} text={"game"}/>
// <h1>counter</h1> 
// <Play name ={ "sfbvk"} />
// </>


// }

const ShowFormData = (props) => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>React Form Assignment</h1>
      <>
      <h1>Form Data</h1>
      <h3 data-cy="first-name">First Name: {props.firstName}</h3>

      <h3 data-cy="last-name">Last Name:{props.lastName}</h3>

      <h3 data-cy="email">Email:{props.email} </h3>

      <h3 data-cy="password">Password:{props.password} </h3>

      <h3 data-cy="phNumber">Phone: {props.phNumber} </h3>

      <h3 data-cy="country">Country: {props.country}</h3>

      <h3 data-cy="birth-date">Birth Date: {props.birthDate}</h3>

      <h3 data-cy="marriage-status">Marriage Status: {props.marriageStatus? "Yes" : "No"}</h3>

      <h3 data-cy="image-url">Image URL: {props.avatar}</h3>

      <h3 data-cy="gender">Gender: {props.gender}</h3>
      </>
      
    
    </>)}



const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phNumber: "",
  country: "",
  birthDate: "",
  avatar: "",
  marriageStatus: false,
  gender: "",
}
const Form = () => {
  const [formState, setFormState] = useState(initState);
  const [submittedData, setSubmittedData] = useState(false);

  function handleChange(event){
    let {name, value, type, checked} = event.target;
    if(type == "checkbox"){
      value = checked;
    }
        setFormState({
          ...formState,
          [name] : value,
        });
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(formState)
      setSubmittedData(true)
    }
  return (
    <>
     <div>
        {submittedData && <ShowFormData 
        firstName={formState.firstName} 
        lastName={formState.lastName}
        email={formState.email}
        password={formState.password}
        phNumber={formState.phNumber}
        country={formState.country}
        birthDate={formState.birthDate}
        avatar={formState.avatar}
        marriageStatus={formState.marriageStatus}
        gender={formState.gender}
        />}
      </div>
        <form onSubmit={handleSubmit}>
    <div className="formPart">
        <label htmlFor="fName">First Name: </label>
      <input type="text" name="firstName" id="fName" value={formState.firstName} onChange={handleChange}/>
      <label htmlFor="lName">Last Name: </label>
      <input type="text" name="lastName" id="lName" value={formState.lastName} onChange={handleChange}/>
      
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" value={formState.email} onChange={handleChange}/>
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="pass" value={formState.password} onChange={handleChange}/>
      <label htmlFor="phNumber">Phone Number: </label>
      <input type="number" name="phNumber" id="num" value={formState.phNumber} onChange={handleChange}/>
      <label htmlFor="cont">Country: </label>
     
     <select type="select tag" name="country" id="cont" value={formState.country} onChange={handleChange}>

      <option value="USA">USA</option>
      <option value="UK">UK</option>
      <option value="India">India</option>
      <option value="Canada">Canada</option>
      <option value="France">France</option>
      <option value="Germany">Germany</option>
      <option value="Japan">Japan</option>
      <option value="Italy">Italy</option>
      <option value="Spain">Spain</option>
      <option value="Russia">Russia</option>
      <option value="Brazil">Brazil</option>
      <option value="China">China</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Malaysia">Malaysia</option>
     
     </select>
     <label htmlFor="bDay">BirthDay: </label>
      <input type="date" name="birthDate" id="bDay" value={formState.birthDate} onChange={handleChange}/>
      <label htmlFor="avatar">Avatar: </label>
      
      <input type="file" name="avatar" id="avatar" value={formState.avatar} onChange={handleChange}/>
      <label htmlFor="marr">Select if Married</label>
      Marriage Status<input type="checkbox" id="marr" name="marriageStatus" checked={formState.marriageStatus} onChange={handleChange} />
      <br />
      <label htmlFor="gen">Choose Gender: </label>
        Male<input type="radio" className="gen" name="gender" checked={formState.gender == "male"} onChange={handleChange} value="male"/>
        Female<input type="radio" className="gen" name="gender" checked={formState.gender == "female"} onChange={handleChange} value="female"/>
        Other<input type="radio" className="gen" name="gender" checked={formState.gender == "other"} onChange={handleChange} value="other"/>

      <input type="submit" id="sub" />
      </div>
      </form>
        </>
  );
}

{/* <ShowFormData/>
<Form/> */}


function App() {
return<>
<ConRender avatarSrc={"https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"} name={""}/>
<AnimeBaground/>
</>
}

export default App
