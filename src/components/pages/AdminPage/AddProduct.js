
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data) => {
        const addProducts = {
            name: data.name,
            price: data.price,
            category: data.category,
            shortDis: data.shortDis,
            description: data.description,
            imageURL: imageURL,


        }
        alert('New product added');
        reset();

        const url = `http://localhost:5000/addProduct`
        console.log(addProducts)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProducts)
        })
            .then(res => console.log('admin added', res))
    };

    //image upload
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '2eef38a6bd018d8bc047bd3f5cc6b050');
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="admin-section">

            <h2 className="text-center ">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" name="title" placeholder="product name" name="name" {...register("name")} required />
                </div>
                <div className="row ">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Price</label>
                            <input type="number" className="form-control" name="name" placeholder=" price" name="price" {...register("price")} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label"> Category</label>
                            <select name="category"  {...register("category")} required type="text" className="form-select">
                                <option value="1">Fancy Decorative Lights</option>

                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Image</label>
                    <input type="file" onChange={handleImageUpload} className="form-control" placeholder="import image" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Short Description</label>
                    <textarea maxlength="70" type="text" className="form-control" placeholder=" short description" name="shortDis" {...register("shortDis")} required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Description</label>
                    <textarea type="text" className="form-control" placeholder="description" name="description" {...register("description")} required />
                </div>
                <button type="submit" className="btn btn-fruit">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;