export default function addGreeting(): void {
    document.querySelector("body").innerHTML = `
    <div class="greeting">
        <h1 class="greeting_title">
            Welcome to Async Race
        </h1>
        <div class="greeting__prescribe">
            Async Race it's really intersting game and so on ... 
        </div>
        <button class="greeting__start">Start game</button>
    </div>
    `;
}