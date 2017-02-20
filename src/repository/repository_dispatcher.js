import AptitudeRepository from './aptitude/aptitude';
import PlayerRepository from './player/player';

export default class RepositoryDispatcher
{
    constructor() {
        this.repositories = {
            'aptitude': () => { return new AptitudeRepository() },
            'player': () => { return new PlayerRepository() }
        };
    }

    /**
     * @param repo
     * @returns {*}
     */
    getRepository(repo) {
        return this.repositories[repo]();
    }

    /**
     * Handles the creation of a new character sheet
     * @param data
     * @return bool
     */
    createNewCharacterSheet(data) {
        const p = this.getRepository('player');
        const a = this.getRepository('aptitude');

        let player = p.createPlayer();
        let player_character = p.createPlayerCharacter(player.id);

        for (let key in data.apts) {
            if (data.apts.hasOwnProperty(key)) {
                let aptitude_value = data.apts[key];

                a.createAptitudeValue(aptitude_value, player_character.id);
            }
        }
    }
}