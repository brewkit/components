import * as React from 'react';

export const TableLevel2Context = React.createContext<{ variant: 'head' | 'body'} | undefined>(undefined);