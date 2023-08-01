import React,{useState} from 'react'
import './style.scss'
import data from "./Data.json"

const Glasses = () => {
	const glasstype=[]
	data.forEach(e=>{
		let url =e.url.replace("png","jpg")
		 url =url.replace("v","g")
		const {id}=e
		const glass={id,url}
		glasstype.push(glass)
	})
	console.log(glasstype)
	const[item,setItem]=useState(data[0])
	const changeGlass=(id)=>()=>{
		const findItem=data.find(e=>e.id===id)
		setItem(findItem)
		console.log(item)

		let addImg=document.querySelector(".glassModel")
		addImg.classList.remove("d-none")
		addImg=document.querySelector(".glassInfo")
		addImg.classList.remove("d-none")
	}
  return (
	<div className='container-fluid'>
		<div className="row">
			<div className="col-6">
				<img src={"./glassesImage/model.jpg"}  alt="..." />
			</div>
			<div className="col-6">
				<img src={"./glassesImage/model.jpg"}  alt="..." />
					<div className="glassInfo d-none">
						<h2>{item.name}</h2>
						<p>{item.desc}</p>
					</div>
				<img src={item.url} alt="..." className={`glassModel d-none`} />
			</div>
		</div>
		<div className="row wrap bg-white m-auto">
		{
			glasstype.map((e)=>(
					<div className="col-2" key={e.id} onClick={changeGlass(e.id)}>
						<img src={e.url} alt="..." />
					</div>
					
			))
			}
	</div>
	</div>
  )
}

export default Glasses
