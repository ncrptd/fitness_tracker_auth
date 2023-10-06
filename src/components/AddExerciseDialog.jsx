import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import AddExercise from './AddExerciseForm';
import { useState } from 'react';

const AddExerciseDialog = () => {
    const [open, setOpen] = useState(false)
    return <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
            <button className="bg-blue-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded">
                Add Exercise
            </button>
        </Dialog.Trigger>

        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 w-80 max-w-full rounded-lg shadow-lg">


                <AddExercise setOpen={setOpen} />
                <Dialog.Close asChild>
                    <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
                        <Cross2Icon />
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
}
export default AddExerciseDialog;
