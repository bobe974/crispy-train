export class Tag{

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly SPRING = new Tag('SpringBoot', 'green');
    static readonly JavaScript = new Tag('JavaScript', 'yellow');

    private constructor(private readonly key : string, public readonly color: string){

    }

    toString(){
        return this.key
    }
}