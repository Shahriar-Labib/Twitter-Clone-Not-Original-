import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubcriptionModal from '../SubcriptionModal/SubcriptionModal';

const RightPart = () => {

    const [openSubscriptionModel, setOpenSubscriptionModel] = React.useState(false);
    const handleOpenSubscriptionModel = () => setOpenSubscriptionModel(true);
    const handleCloseSubscriptionModel = () => setOpenSubscriptionModel(false);

    const handleChangeTheme = () => {
        console.log("change theme");
    }
    return (
        <div className='py-5 sticky top'>
            <div className='relative flex items-center'>
                <input type="text" className='py-3 rounded-full text-gray-500 w-full pl-12' />
                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='text-gray-500' />
                </div>
                <Brightness4Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />
            </div>

            <section className='my-5'>
                <h1 className='text-xl font-bold text-center'>Get Verified</h1>
                <h2 className='text-center font-normal my-2 capitalize'>Subscribe to unlock new features</h2>
                <div className="flex justify-center">
                    <Button onClick={handleOpenSubscriptionModel}
                        variant='contained' 
                        sx={{
                            padding: "10px 20px",
                            borderRadius: "25px",
                            textTransform: "uppercase",
                            fontWeight: "bold"
                        }}>
                        Get Verified
                    </Button>
                </div>
            </section>

            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1 capitalize text-left'>What's Happening</h1>
                <div>
                    <p className='text-sm text-left'>
                        FIFA Women's World Cup . LIVE
                    </p>
                    <p className='font-bold text-left'>Phillippines vs Switzerland</p>
                </div>
                {[1, 1, 1].map((_, idx) => (
                    <div key={idx} className='flex justify-between w-full items-center'>
                        <div>
                            <p className="text-xs text-gray-500">Entertainment . Trending</p>
                            <p className='font-bold leading-tight'>#TheDC</p>
                            <p className="text-xs text-gray-500 leading-tight">34.3k Tweets</p>
                        </div>
                        <MoreHorizIcon />
                    </div>
                ))}
            </section>
            <section>
                <SubcriptionModal open={openSubscriptionModel} handleClose={handleCloseSubscriptionModel} />
            </section>
        </div>
    )
}

export default RightPart