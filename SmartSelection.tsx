import * as React from 'react';
import { SectionHeader } from './SectionHeader';
import { InstructionBlock } from './InstructionBlock';
import { TryItOutInstruction } from './TryItOutInstruction';

export const SmartSelection: React.FC = () => {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-end px-20 pt-5 mx-auto w-full bg-zinc-100 pb-[836px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
            <div className="self-start max-w-full w-[507px]">
              <SectionHeader number="5" title="Smart Selection" />
            </div>
            <div className="mt-14 mr-14 text-xl tracking-tight leading-9 text-black text-opacity-80 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              Smart Selection allows you to quickly adjust spacing between objects, create an uniform grid by a selection of objects, and rearrange objects within a grid layout. Think of grid layouts for inbox interfaces, news feeds, and photo galleries.
            </div>
            <div className="pl-10 mt-24 max-w-full bg-white w-[782px] max-md:pl-5 max-md:mt-10">
              <InstructionBlock
                title="How Smart Selection works"
                description="Smart Selection works automatically on any selection or group of 3 or more items with equal, uniform spacing. With items selected, you can adjust spacing, position, and size of all these items at once by dragging the pink handles."
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/4b79261b092bb8a014053b47ed6ebf914d31c8eac5306f32574889f9e008ba72?placeholderIfAbsent=true&apiKey=fa00286f602c4693ab55fc0c101de419"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start px-20 pt-24 mx-auto w-full border-solid bg-neutral-200 border-[10px] border-zinc-100 pb-[1201px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
            <div className="text-5xl font-bold tracking-tighter leading-none text-black max-md:text-4xl">
              Try it out
            </div>
            <div className="mt-11 text-xl tracking-tight leading-relaxed text-black text-opacity-80 max-md:mt-10 max-md:max-w-full">
              See how Smart Selection works with the two examples below.
            </div>
            <div className="mt-16 max-w-full w-[826px] max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <TryItOutInstruction
                    number="1"
                    title="Adjust position"
                    description="On the app below, select the two photos on the right-side (dog on boat and holding hands) and use the circular handle to quickly swap their positions. Hold the shift key to multi-select."
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <TryItOutInstruction
                    number="2"
                    title="Adjust spacing"
                    description="On the app below, select all the dog photos (12) in the grid below and use the horizontal handles to quickly adjust their vertical spacing. Hold the shift key to multi-select"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};