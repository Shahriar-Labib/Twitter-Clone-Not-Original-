import React from 'react'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {

    const navigate = useNavigate();
  return (
    <div className='h-screen sticky top-0'>
      <div>
        <div className='py-5'>
          <svg height="30" width="30" viewBox="0 0 24 24" aria-hidden="true" className="r-jwli3a r-4qtqp9 r-yyyyoo r-lapphf r-1777fci r-dmczs r-494qqr r-bnwqim r-1plcrui">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l9.966 15.644zm-5.82-8.704-.685.847 6.925 9.109h-1.548zm-2.894-2.664-.747.956 6.926 9.109h-1.548z"/>
            </g>
          </svg>
        </div>
        <div className='space-y-6'>
          {navigationMenu.map((item) => {
            const Icon = item.icon;
            return (
              <div onClick={() =>
        item.title === "Profile"
        ? navigate(`/profile/${5}`)
        : navigate(item.path)} 
        key={item.title} 
    className='cursor-pointer flex space-x-3 items-center'>
                <Icon />
                <p className='text-xl'>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Navigation
