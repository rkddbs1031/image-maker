import { ChangeEvent } from 'react'
import { InputValueType } from 'types/input'

interface NumberInputProps<T> {
  name?: string
  value?: InputValueType
  max?: number | string | undefined
  min?: number | string | undefined
  onChange?: (v: T) => void
  className?: string
}

const NumberInput = <T extends InputValueType>({ name, value, min, max, onChange, className }: NumberInputProps<T>) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: changedValue } = e.currentTarget

    if (/^\d*$/.test(changedValue)) {
      onChange && onChange(Number(changedValue) as T)
    }
  }

  return (
    <input
      type='text'
      name={name}
      value={value}
      min={min}
      max={max}
      onChange={handleInputChange}
      className={className}
    />
  )
}

interface TextInputProps<T> {
  name?: string
  value?: InputValueType
  id?: string | undefined
  onChange?: (v: T) => void
  className?: string
}

const TextInput = <T extends InputValueType>({ name, value, onChange, className, id }: TextInputProps<T>) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: changedValue } = e.currentTarget
    onChange && onChange(changedValue as T)
  }

  return <input type='text' name={name} value={value} onChange={handleInputChange} id={id} className={className} />
}

export const FormInput = {
  Number: NumberInput,
  Text: TextInput,
}
