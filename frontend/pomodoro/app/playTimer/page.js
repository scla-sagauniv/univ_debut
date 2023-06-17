import Header from '/components/Header';
import Timer from '@/components/Timer';

const PlayTimer = () => {
  return (
    <main className="">
      <Header/>
      <div className="flex justify-center">
      <Timer/>
      </div>
      <div className="flex justify-center">
        <div className="w-1/3 bg-gray-200 m-2 p-2 rounded"> 
          <h2>現状</h2>
          - 分からないところが分かっている
          <p>- 分からないところが分からない</p>
          <p>- 分からないところが分からない状況を何とかする術を知らない</p>
          <h2>悩んでいること</h2>
          <h2>悩みから得られる仮説</h2>
          <h2>仮説から得られた結論</h2>
        </div>
      </div>
    </main>
  )
}
export default PlayTimer
