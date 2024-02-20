export default function InputLabel({value}) {
  return (
    <label class="block font-medium text-sm text-gray-700">
      <span v-if="value">{value}</span>
    </label>
  )
}