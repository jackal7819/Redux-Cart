import ProductItem from './ProductItem';
import styles from './Products.module.css';

const DUMMY_GAMES = [
    {
        id: 'p1',
        price: 20,
        title: 'Cuphead',
        description:
            'Cuphead is a classic run and gun action game heavily focused on boss battles.',
    },
    {
        id: 'p2',
        price: 40,
        title: 'Hogwarts Legacy',
        description:
            'Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books.',
    },
    {
        id: 'p3',
        price: 30,
        title: 'Age of Wondrs 4',
        description: 'Rule a fantasy realm of your own design!',
    },
];

const Products = (props) => {
    return (
        <section className={styles.products}>
            <h2>Buy your favorite games</h2>
            <ul>
                {DUMMY_GAMES.map((game) => (
                    <ProductItem
                        key={game.id}
                        id={game.id}
                        title={game.title}
                        price={game.price}
                        description={game.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
