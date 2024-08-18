import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import Filters from './filters';

export default function FilterModal ({ isOpen, setIsOpen }) {

    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-[1050] h-svh">
                <div className="fixed inset-0 w-screen items-center justify-center h-svh overflow-y-auto">
                    <DialogPanel className="max-w-lg space-y-4 bg-white pb-5">
                        <Filters isOpen={isOpen} />
                        <div className="flex gap-4 px-3">
                            <button className='w-[calc(50%-8px)] py-[7px] px-3.5 border float-left text-[#282c3f] border-[#d4d5d9] rounded-sm' onClick={() => setIsOpen(false)}>Cancel</button>
                            <button className='w-[calc(50%-8px)] py-[7px] px-3.5 border float-right text-[#ff3f6c] border-[#ff3f6c] rounded-sm' onClick={() => setIsOpen(false)}>Filter</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}