import { FC } from 'react';

import clsx from 'clsx';

import { TeamMember } from './TeamMember';
import { TeamVariant, TTeamProps } from './types';

export const Team: FC<TTeamProps> = ({ variant, header, role }) => (
  <section className="px-[3rem] my-[6rem] mx-auto md:my-[8rem] lg:px-[13rem] max-w-layout">
    <h2 className="text-[4rem] font-extrabold leading-[4.9rem] text-center md:text-[4.8rem] text-violet font-heading">
      {header}
    </h2>
    <ul className="flex">
      <p className="hidden">
        {variant}
        {role}
      </p>
      {/* {people.map((props) => (
        <TeamMember {...props} key={props._uid} />
      ))} */}
    </ul>
  </section>
);
