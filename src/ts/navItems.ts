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
        url: '/'
    },
    {
        name: 'Dydaktyka',
        id: 'teaching-dropdown',
        subitems: [
            {
                name: 'Studia inżynierskie I stopnia',
                url: '/dydaktyka_I_stopien'
            },
            {
                name: 'Studia inżynierskie niestacjonarne',
                url: '/dydaktyka_niestacjonarne'
            },
            {
                name: 'Studia magisterskie II stopnia',
                url: '/dydaktyka_II_stopien'
            }
        ]
    },
    {
        name: 'Specjalność',
        url: '/specjalnosc',
    },
    {
        name: 'Pracownicy',
        id: 'employees-dropdown',
        subitems: [
            {
                name: 'Zespół Chemii Analitycznej',
                url: '/zespol_chemii_analitycznej'
            },
            {
                name: 'Zespół metalurgii chemicznej',
                url: '/zespol_metalurgii'
            },
            {
                name: 'Doktoranci',
                url: '/doktoranci'
            },
            {
                name: 'Konsultacje',
                url: '/konsultacje'
            }
        ]
    },
    {
        name: 'Badania',
        url: '/badania',
    },
    {
        name: 'Laboratoria',
        url: '/laboratoria',
    },
]