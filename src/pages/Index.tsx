export default function Index() {
	return(
		<main>
			<button onClick={()=>document.body.classList.toggle("dark")}>
				Trocar tema
			</button>
		</main>
	)
}