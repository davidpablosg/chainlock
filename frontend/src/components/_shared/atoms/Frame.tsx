interface Props {
  children?: React.ReactNode 
}

const Frame = ({children}: Props) => {
  return (
    <div className="h-full flex justify-center items-center p-4">
      <div className="grow max-w-full sm:max-w-md pb-20">
        {children}
      </div>
    </div>
  )
}

export default Frame
