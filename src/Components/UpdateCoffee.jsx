import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id ,chef, name, img, details, price, taste, supplier } = coffee;
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value 
        const img = form.img.value
        const details = form.details.value
        const price = form.price.value
        const taste = form.taste.value 
        const supplier = form.supplier.value
        const coffee = {name,img,details,price,taste,supplier}
        fetch(`http://localhost:3000/coffees/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {
            if( data){
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Update Success!",
                  showConfirmButton: false,
                  timer: 1500
                });
               }
               form.reset()
        })
    }
    return (
        <section className="px-6 py-12  dark:bg-gray-900">
        <form onSubmit={handleUpdateCoffee} className="max-w-2xl mx-auto">
          <fieldset className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Update Coffee Information</h2>
              <p className="text-sm text-gray-600">Enter the details of the coffee.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">Coffee Name</label>
                <input defaultValue={name} name="name" id="name" type="text" placeholder="Coffee Name" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-violet-600" />
              </div>
              <div>
                <label htmlFor="img" className="block text-sm mb-1">Image URL</label>
                <input defaultValue={img} name="img" id="img" type="text" placeholder="Image URL" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-violet-600" />
              </div>
              <div className="col-span-full">
                <label htmlFor="details" className="block text-sm mb-1">Coffee Details</label>
                <textarea defaultValue={details} name="details" id="details" placeholder="Coffee Details" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-violet-600"></textarea>
              </div>
              <div className="col-span-full">
                <label htmlFor="price" className="block text-sm mb-1">Price</label>
                <input defaultValue={price} name="price" id="price" type="number" placeholder="Price" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-violet-600" />
              </div>
            </div>
          </fieldset>
          <fieldset className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Taste and Supplier</h2>
              <p className="text-sm text-gray-600">Enter the taste and supplier information.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label  htmlFor="taste" className="block text-sm mb-1">Taste</label>
                <input defaultValue={taste} name="taste" id="taste" type="text" placeholder="Taste" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-violet-600" />
              </div>
              <div>
                <label htmlFor="supplier" className="block text-sm mb-1">Supplier</label>
                <input defaultValue={supplier} name="supplier" id="supplier" type="text" placeholder="Supplier" className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-violet-600" />
              </div>
            </div>
          </fieldset>
          <button  className="block w-full py-3 px-4 bg-[#E3B577] text-white rounded-md shadow-md hover:bg-[#E3B577] focus:outline-none focus:ring focus:ring-violet-600 text-center">Submit</button>
        </form>
      </section>
    );
};

export default UpdateCoffee;