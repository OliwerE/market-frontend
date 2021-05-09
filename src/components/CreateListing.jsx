import React, { useState } from 'react'
import './CreateListing.css'

// import FileReader from 'FileReader' // ta bort?

const CreateListing = () => {
  const [title, setTitle] = useState('')
  const [productImage, setProductImage] = useState()
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('kategori 1')
  const [description, setDescription] = useState('')
  const [listingType, setListingType] = useState('salj')

  const imageHandler = (image) => {
    console.log(image)
    // setProductImage(image) // kan inte sätta i state
    // console.log('----')
    // console.log(productImage)
    // console.log(base64.encode(image))
    // console.log('----')

    // const reader = new FileReader()
    // reader.onloadend = () => {
    //   console.log(reader.result)
    // }
    // reader.readAsDataURL(image)

        // encode the file using the FileReader API
    // const fileReader = new FileReader();
    
    // fileReader.onloadend, function () {
    //   console.log('success')
    // }

    // fileReader.readAsDataURL(image)

    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('listing submit!')
    // console.log(title)
    // console.log(productImage)
    // console.log(description)
    // console.log(category)
    // console.log(price)
    // console.log(listingType)
    console.log(title.trim().length > 0)
    console.log(description.trim().length > 0)

    const data = {
      title,
      productImage: 'test',
      description,
      category,
      listingType,
      price
    }

    if (title.trim().length > 0 /* fixa: || productImage.length > 0 */&& description.trim().length > 0 && category.trim().length > 0 && price.trim().length > 0 && listingType.trim().length > 0) {
      var status = null
      fetch('http://localhost:8080/listings/create', {
          method: 'POST',
          credentials: 'include',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
          }).then(res => {
            status= res.status
            return res.json()
          }).then(json => {
            console.log(json)
            // Fix: Respons

          }).catch(err => console.error(err))
    } else {
      console.log('annons uppfyller inte krav!')
    }
  }

  return (
    <div id="createListingContainer">
      <h1>Skapa Annons</h1>
      <form id="registerForm" onSubmit={handleSubmit}>

        <label id="firstFormLabel" for="firstname">Titel</label>
        <input type="text" id="firstname" name="firstname" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
          <input type="radio" id="salj" name="listingType" value="salj" onChange={(e) => setListingType(e.target.value)} checked/>
          <label for="salj">Sälj</label>
          <input type="radio" id="kop" name="listingType" value="kop" onChange={(e) => setListingType(e.target.value)} />
          <label for="kop">Köp</label><br />
        <label id="firstFormLabel" for="productImage">Bild</label>
        <input type="file" id="productImage" name="productImage" accept="image/*" onChange={(e) => imageHandler(e.target.files[0])} capture></input>
        {productImage && <img src={productImage} width="20px" height="20px" />}
        {/* Bild kan inte hämtas pga lokal resurs... */}
        <br />

        <textarea placeholder="Beskrivning" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />


        <label id="firstFormLabel" for="price">Pris</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <br />
        <label id="firstFormLabel" for="category">Kategori</label>
        <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="kategori 1">kategori 1</option>
          <option value="kategori 2">kategori 2</option>
          <option value="kategori 3">kategori 3</option>
          <option value="kategori 4">kategori 4</option>
        </select>
        <br />
        

        <button className="registerFormBtn" type="submit">Skapa Annons</button>
      </form>

      
    </div>
  )
}

export default CreateListing
