import { ChangeEvent } from 'react'
import { InputValueType } from 'types/input'

interface NumberInputProps<T> {
  name?: string
  value?: InputValueType
  max?: number | string | undefined
  onChange?: (v: T) => void
  className?: string
}

const NumberInput = <T extends InputValueType>({ name, value, max, onChange, className = '' }: NumberInputProps<T>) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: changedValue } = e.currentTarget

    if (/^\d*$/.test(changedValue) && onChange) {
      let v = Number(changedValue)

      if (max) {
        v = Number(max) < Number(changedValue) ? Number(max) : Number(changedValue)
      }

      onChange(v as T)
    }
  }

  return <input type='text' name={name} value={value} onChange={handleInputChange} className={className} />
}

interface TextInputProps<T> {
  name?: string
  value?: InputValueType
  id?: string | undefined
  onChange?: (v: T) => void
  className?: string
}

const TextInput = <T extends InputValueType>({ name, value, onChange, className = '', id }: TextInputProps<T>) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: changedValue } = e.currentTarget
    onChange && onChange(changedValue as T)
  }

  return <input type='text' name={name} value={value} onChange={handleInputChange} id={id} className={className} />
}

interface RangeInputProps<T> {
  value: string | ReadonlyArray<string> | number | undefined
  min: number
  max: number
  step: number
  onChange?: (v: T) => void
}

const RangeInput = <T extends InputValueType>({ value, min, max, step, onChange }: RangeInputProps<T>) => {
  const handleChangeRange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: changedValue } = e.currentTarget
    onChange && onChange(Number(changedValue) as T)
  }

  return <input type='range' value={value} min={min} max={max} step={step} onChange={handleChangeRange} />
}

export const FormInput = {
  Number: NumberInput,
  Text: TextInput,
  Range: RangeInput,
}
