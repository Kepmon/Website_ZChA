interface NavItem {
    name: string,
    id?: string,
    url?: string,
    subitems?: NavSubitem[]
}

interface NavSubitem {
    name: string,
    url: string
}

export const navItems: NavItem[] = [
    {
        name: 'Strona główna',
        url: '/Website_ZChA/'
    },
    {
        name: 'Dydaktyka',
        id: 'teaching-dropdown',
        subitems: [
            {
                name: 'Studia inżynierskie I stopnia',
                url: '/Website_ZChA/dydaktyka_I_stopien'
            },
            {
                name: 'Studia inżynierskie niestacjonarne',
                url: '/Website_ZChA/dydaktyka_niestacjonarne'
            },
            {
                name: 'Studia magisterskie II stopnia',
                url: '/Website_ZChA/dydaktyka_II_stopien'
            }
        ]
    },
    {
        name: 'Specjalność',
        url: '/Website_ZChA/specjalnosc',
    },
    {
        name: 'Pracownicy',
        id: 'employees-dropdown',
        subitems: [
            {
                name: 'Zespół Chemii Analitycznej',
                url: '/Website_ZChA/zespol_chemii_analitycznej'
            },
            {
                name: 'Zespół metalurgii chemicznej',
                url: '/Website_ZChA/zespol_metalurgii'
            },
            {
                name: 'Doktoranci',
                url: '/Website_ZChA/doktoranci'
            },
            {
                name: 'Konsultacje',
                url: '/Website_ZChA/konsultacje'
            }
        ]
    },
    {
        name: 'Badania',
        url: '/Website_ZChA/badania',
    },
    {
        name: 'Laboratoria',
        url: '/Website_ZChA/laboratoria',
    },
]