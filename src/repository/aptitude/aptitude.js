import { Aptitude, AptitudeValue } from '../../models';

export default class AptitudeRepository
{
    /**
     * @param apt_value
     * @param id_player_character
     * @return AptitudeValue|bool
     */
    createAptitudeValue(apt_value, id_player_character) {
        return AptitudeValue.create({ value: apt_value, PlayerCharacterId: id_player_character });
    }

    /**
     * @param name
     * @returns Aptitude|null
     */
    findAptitudeByName(name='') {
        return Aptitude.findOne({ where: {name: name} });
    }
}