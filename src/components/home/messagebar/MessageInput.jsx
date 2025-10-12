import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Send from '@/assets/send.svg';

const MessageInput = ({handleKeyDown, setInputValue, handleMessageSending}) => {
    return(
        <Card className="border-none bg-gray-900 z-50 p-0 w-full flex gap-0 flex-row items-center rounded-none">
            <div className='w-[95%]'>
               <div onKeyDown={(event) => handleKeyDown(event)} onInput={(e) => {setInputValue(e.target.innerHTML);}} contentEditable="true" className='[scrollbar-width:none] [-ms-overflow-style:none] [&::webkit-scrollbar]:hidden w-full py-4 px-2 leading-5 outline-none text-white break-words whitespace-pre-wrap overflow-y-auto max-h-[12rem]'></div>
            </div>
            <div className='flex items-end h-full w-[5%]'>
                <Button className=" cursor-pointer bg-transparent hover:bg-transparent flex flex-1 flex-col justify-end items-center p-0 mb-2.5"
                onClick={() => handleMessageSending()}
                >
                    <img src={Send} />
                </Button>  
            </div>

        </Card>
    )
}

export default MessageInput;