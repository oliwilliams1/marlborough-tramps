export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <p>logo</p>
      <div className="flex space-x-4">
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
      </div>
      <p>other things</p>
    </header>
  )
}