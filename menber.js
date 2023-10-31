function skillsMember(){
    return{
        restrict: 'T',
        temlateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}