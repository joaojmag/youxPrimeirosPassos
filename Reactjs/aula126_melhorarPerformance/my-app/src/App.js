// import { useRef } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import './App.css'
import { Header } from './Header';

import { useForm } from 'react-hook-form'

const schema = z.object({
  name: z.string().nonempty('O campo nome é obrigatório'),
  email: z.string().email("Digite um e-mail valido").nonempty('Ocampo e-mail é obrigatório'),
  username: z.string().min(3, 'O username deve ter pelomenos 3 caracteres').max(10, 'O campo username é obrigatorio')
    .nonempty('Ocampo username é obrigatório'),
  telefono: z.string().refine((value) => /^\d{2} ?\d{9}$/.test(value), {
    message: 'Digite um telefone valido no formato DD + 9 números'
  })
})


function App() {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [username, setUsername] = useState("")
  // const [description, setDescription] = useState("")
  // const [type, setType] = useState("user")

  //==========================================

  // const nameRef = useRef(null);
  // const emailRef = useRef(null);
  // const usernameRef = useRef(null);
  // const descriptionRef = useRef(null);
  // const typeRef = useRef('user');


  //==========================================
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  function handleSave(data) {

    console.log(data);
    // e.preventDefault();

    // console.log({
    //   name: nameRef.current?.value,
    //   email: emailRef.current?.value,
    //   username: usernameRef.current?.value,
    //   description: descriptionRef.current?.value,
    //   type: typeRef.current?.value,
    // })
  }


  return (
    <div className="container">
      <h1>React</h1>
      <Header />

      <form className="form" onSubmit={handleSubmit(handleSave)}>
        <input
          type="text"
          // value={name}
          // onChange={ (event) => setName(event.target.value) }
          placeholder="Digite seu nome..."
          className="input"
          // ref={nameRef}
          // {...register('name', {required: true} )}
          {...register('name')}
          id='name'
        />
        {errors.name && <p className='error'>{errors.name.message}</p>}

        <input
          type="text"
          // value={email}
          // onChange={(event) => setEmail(event.target.value)}
          placeholder="Digite seu email..."
          className="input"
          // ref={emailRef}
          // {...register('email', {required: true} )}
          {...register('email')}
          id='email'
        />
        {errors.email && <p className='error'>{errors.email.message}</p>}

        <input
          type="text"
          // value={username}
          // onChange={(event) => setUsername(event.target.value)}
          placeholder="Digite seu username..."
          className="input"
          // ref={usernameRef}
          // {...register('username', {required: true} )} // copiando para baixo 
          {...register('username')}
          id='username'
        />
        {errors.username && <p className='error'>{errors.username.message}</p>}

        <input
          type="text"
          // value={username}
          // onChange={(event) => setUsername(event.target.value)}
          placeholder="Digite seu telefone..."
          className="input"
          // ref={usernameRef}
          // {...register('username', {required: true} )} // copiando para baixo 
          {...register('telefono')}
          id='telefono'
        />
        {errors.telefono && <p className='error'>{errors.telefono.message}</p>}

        {/* <textarea
          type="text"
          // value={description}
          // onChange={(event) => setDescription(event.target.value)}
          placeholder="Digite sua descriçao..."
          className="input"
          ref={descriptionRef}
        ></textarea> */}


        {/* <select
          className="select"
          value={type}
          onChange={e => setType(e.target.value)}
          ref={typeRef}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select> */}


        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
