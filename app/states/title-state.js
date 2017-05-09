
import { JSONLevelState } from './json-level-state';
import { Prefab } from '../models/prefab';
import { TextPrefab } from '../models/text-prefab';


export class TitleState extends JSONLevelState {
    
    constructor() {
        super();
        
        this.prefab_classes  = {
            background  : Prefab.prototype.constructor,
            title       : TextPrefab.prototype.constructor
        }
    }
}