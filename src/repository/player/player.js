import { Player, PlayerCharacter } from '../../models';

export default class PlayerRepository
{
    /**
     * @return {Player|bool}
     */
    createPlayer(email, nick, password) {
        return Player.create( {email: email, nickname: nick, hash: password} );
    }
}