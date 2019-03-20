import { Game } from './source/src/Game'
declare global
{
    interface Window { main: any }
}

window.main = _ =>
{
    const gameInstance: Game = new Game();
}