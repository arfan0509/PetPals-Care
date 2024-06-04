import React from 'react'

const PopUpPosting = () => {

  
  
  return (
    <>
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='bg-white w-auto rounded-lg shadow-lg'>
          <div className='p-4 text-xl font-bold'>
            <h1>Posing Hewan Saya</h1>
          </div>
          <div className=' w-auto h-auto flex justify-center items-center'>
            <div className=' w-full h-auto'>
              <div className='p-4'>
                <label htmlFor="">Nama Panggilan</label>
                <br />
                <input type="text" className='border border-black rounded-md'/>
              </div>

              <div className='px-4'>
                <label htmlFor="">Jenis Kelamin</label>
                <br />
                <div className='flex gap-4'>
                  <div className=''>
                    
                    <input type="radio" id='jantan' name='jantan' value='jantan'/>
                    <label htmlFor='jantan' className="ml-2">Jantan</label>
                  </div>
                  <div>
                    <input type="radio" name='' value=''  id='betina'/>
                    <label htmlFor='betina' className="ml-2">Betina</label>
                  </div>
                </div>
              </div>

              <div className='p-4'>
                <label htmlFor="">Warna</label>
                <br />
                <input type="text" className='border border-black rounded-md' />
              </div>

              <div className='px-4 pb-4'>
                <label htmlFor="">Sudah Diberi Obat cacing?</label>
                <br />
                <div className='flex gap-4'>
                  <div className=''>
                    <input type="radio" name='' value=''  />
                    <span className="ml-2">Sudah</span>
                  </div>
                  <div>
                    <input type="radio" name='' value='' />
                    <span className="ml-2">Belum</span>
                  </div>
                </div>
              </div>
            </div>

            <div className=' w-auto h-auto b'>
              <div className='pl-4 pt-4 pb-16'>
                <label htmlFor="">Jenis Hewan</label>
                <br />
                <input type="text" className='border border-black rounded-md' />
              </div>

              <div className='p-4'>
                <label htmlFor="">Umur</label>
                <br />
                <input type="text" className='border border-black rounded-md'/>
              </div>

              <div className='px-4 pb-4'>
                <label htmlFor="">Sudah Vaksin?</label>
                <br />
                <div className='flex gap-4'>
                  <div className=''>
                    <input type="radio" name='' value='' />
                    <span className="ml-2">Sudah</span>
                  </div>
                  <div>
                    <input type="radio" name='' value=''  />
                    <span className="ml-2">Belum</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* text area */}
          <div className='max-w-md mx-auto p-4'>
            <div>
              <label htmlFor="textarea" className="block text-lg font-medium mb-2">
              Informasi Tambahan
              </label>
              <textarea name="" id="" className='w-full h-20 p-4 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black-0 focus:border-black-0'></textarea>
            </div>
          </div>

          {/* button */}
          <div className=' w-full h-full flex justify-center p-4'>
            <div className='border px-16 py-2 rounded-full bg-[#DE9455] hover:bg-[#D68B4B] text-white'>
              <button>Posting</button>
              </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default PopUpPosting
