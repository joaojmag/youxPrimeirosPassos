import { memo } from 'react'

let renderCount = 0;

export function Header({ name }) {
  renderCount++;
  console.log('RENDERIZOU');

  return (
    <div>
      <h3>Bem vindo {name}</h3>
      <h3>renderizou {renderCount}</h3>
    </div>
  )
}

export const MemorizedHeader = memo(Header);