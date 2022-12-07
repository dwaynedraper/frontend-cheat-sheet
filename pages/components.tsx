import React from 'react'

export default function ComponentsPage() {
  return (
    <div data-theme="corporate" className='w-screen'>
      {/* <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div> */}

      <div className='p-20 relative'>
        <label className='absolute top-0 left-20 text-2xl'>Buttons</label>
        <button className="btn">Button Standard</button>
        <button className="btn btn-primary">Button Primary</button>
        <button className="btn btn-secondary">Button Secondary</button>
        <button className="btn btn-accent">Button Accent</button>
        <button className="btn btn-ghost">Button Ghost</button>
        <button className="btn btn-link">Button Link</button>
      </div>

      <div className='divider'></div>
      <div className="btn-group btn-group-vertical p-20 relative">
        <label className='absolute top-0 left-20 text-2xl'>Vertical Button Group</label>
        <button className="btn btn-active">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
      </div>

      <div className='divider'></div>
      <div className="btn-group btn-group-vertical lg:btn-group-horizontal p-20 relative">
        <label className='absolute top-0 left-20 text-2xl'>Responsive Button Group</label>
        <button className="btn btn-active">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
      </div>

      <div className='divider'></div>
      <div className="dropdown relative p-20">
        <label className='absolute top-0 left-20 text-2xl'>Dropdown</label>
        <label tabIndex={0} className="btn m-1">Click</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>

      <div className='divider'></div>
      <div className='relative p-20'>
        <label className='absolute top-0 left-20 text-2xl'>Modal - Click Outside</label>
        <label htmlFor="my-modal-4" className="btn">open modal</label>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          </label>
        </label>
      </div>
      <div className='divider'></div>
      <div className='relative p-20'>
        <label className='absolute top-0 left-20 text-2xl'>Alert Modal - Must Click X or Button</label>
        <label htmlFor="my-modal-3" className="btn">open modal</label>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          </div>
        </div>
      </div>

      <div className='divider'></div>
      <div className='relative p-20'>
        <label className='absolute top-0 left-20 text-2xl'>Responsive Modal - Bottom on Mobile</label>
        <label htmlFor="my-modal-6" className="btn">open modal</label>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">Yay!</label>
            </div>
          </div>
        </div>
      </div>

      <div className='divider'></div>
      <div className='relative p-20'>
        <label className='absolute top-0 left-20 text-2xl'>Menu Toggler Image</label>
        <label className="btn btn-circle swap swap-rotate">
          <input type="checkbox" />
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
        </label>
      </div>

      <div className='divider'></div>
      <div className='relative p-20'>
        <label className='absolute top-0 left-20 text-2xl'>Dark Mode Toggle</label>
        <label className="swap swap-rotate">
          <input type="checkbox" />
          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </label>
      </div>

      <div className='divider'></div>
      <div className='relative p-20'>
        <label className='absolute top-0 left-20 text-2xl'>Info Alert</label>
        <div className="alert alert-info shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>New version available now!</span>
          </div>
        </div>
      </div>

      <div className='divider'></div>
      <div className='relative p-20'>
        <label className='absolute top-0 left-20 text-2xl'>Error Alert</label>
        <div className="alert alert-error shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! What were you thinking bro?</span>
          </div>
        </div>
      </div>

      <div className='divider'></div>
      <div className='relative p-20'>
        <label className='absolute top-0 left-20 text-2xl'>A basic card</label>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className='divider'></div>
      <div className='relative p-20'>
        <label className='absolute top-0 left-20 text-2xl'>Full Photo Card</label>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className='divider'></div>
      <div className='relative p-20'>
        <label className='absolute top-0 left-20 text-2xl'>x</label>

      </div>

      <div className='divider'></div>
      <div className='relative p-20'>
        <label className='absolute top-0 left-20 text-2xl'>x</label>

      </div>
    </div>
  )
}
