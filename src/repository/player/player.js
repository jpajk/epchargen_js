import { Player, PlayerCharacter } from '../../models';

export default class PlayerRepository
{
    /**
     * @return Player|bool
     */
    createPlayer() {
        return Player.create({});
    }

    /**
     * @param id_player
     * @return PlayerCharacter|bool
     */
    createPlayerCharacter(id_player) {
        return PlayerCharacter.create({ PlayerId: id_player });
    }
}