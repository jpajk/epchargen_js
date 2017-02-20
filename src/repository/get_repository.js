import AptitudeRepository from './aptitude/aptitude';
import PlayerRepository from './player/player';

export default class getRepository
{
    constructor() {
        this.repositories = {
            'aptitude': () => { return new AptitudeRepository() },
            'player': () => { return new PlayerRepository() }
        };
    }

    get(repo) {
        return this.repositories[repo]();
    }
}