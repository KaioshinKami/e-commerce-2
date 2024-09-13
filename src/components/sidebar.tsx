import {useEffect, useState} from "react";
import axios from "axios";
import {useFilter} from "./FilterContext.tsx";
import * as React from "react";

const Sidebar=()=>{
    const{searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        setKeyword,}=useFilter()

    const [categories, setCategories]=useState<string[]>([])

    const[keywords]=useState<string[]>(['apple', 'watch', 'Fashion', 'trend', 'shoes', 'shirt'])

    useEffect(()=>{
    fetchCategories()
    }, [])

    const fetchCategories= async ()=>{
        try {
            const response = await axios.get('https://dummyjson.com/products');
            const data = response.data.products;
            const uniqueCategories = Array.from(new Set(data.map((product) => product.category))
            );

            setCategories(uniqueCategories)

            // console.log(uniqueCategories)

        }

        catch (e){
            console.log(e)
        }
    }

    const handleMinPriceChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const value=e.target.value
        setMinPrice(value?parseFloat(value):undefined)
    }

    const handleMaxPriceChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const value=e.target.value
        setMaxPrice(value?parseFloat(value):undefined)}

    const handleRadioChangeCategories=(category:string)=>{
        setSelectedCategory(category)
    }

    const handleKeywordClick=(keyword:string)=>{
        setKeyword(keyword)
    }

    const handleResetFilter=()=>{
        setSearchQuery('')
        setSelectedCategory('')
        setMinPrice(undefined)
        setMaxPrice(undefined)
        setKeyword('')
    }



    return (
        <div className='w-64 p-5 h-screen'>
            <h1 className='text-2xl font-bold mb-10 mt-4'>Store Product</h1>

            <section>
                <section>
                    <input type="text" className='border-2 rounded px-2 sm:mb-0' placeholder='Searcg Product'
                           value={searchQuery}
                           onChange={e=>setSearchQuery(e.target.value)}/>

                    <div className='flex justify-center items-center'>
                        <input type="text" className='border-2 mr-2 px-5 py-3 mb-3 w-full' placeholder='Min'
                        value={minPrice ?? ''} onChange={handleMinPriceChange}
                        />
                        <input type="text" className='border-2 mr-2 px-5 py-3 mb-3 w-full' placeholder='Max'
                        value={maxPrice ?? ''} onChange={handleMaxPriceChange}
                        />
                    </div>

                    <div className='mb-5'>
                        <h2 className='text-xl font-semibold mb-3'>Categories</h2>
                    </div>

                    {categories.map((category, index) => (
                        <label key={index} className='block mb-2'>
                            <input type="radio" name='category' value={category} className='mr-2 w-[16px] h-[16px]'
                            onChange={()=>handleRadioChangeCategories(category)} checked={selectedCategory==category}
                            />
                            {category.toUpperCase()}
                        </label>
                    ))}
                </section>

                <div className='mb-5 mt-4'>
                    <h2 className="text-xl font-semibold mb-3">Keywords</h2>
                    <div>
                        {keywords.map((keyword, index) => (
                            <button key={index} className='block mb-2 px4 py-2 w-full text-left border rounded hover:bg-gray-200'
                            onClick={()=>handleKeywordClick(keyword)}
                            >
                                {keyword.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <button className='w-full mb-[4rem] py-2 bg-black text-white rounded mt-5'
                onClick={handleResetFilter}
                >Reset Filter</button>
            </section>
        </div>
    );
}

export default Sidebar