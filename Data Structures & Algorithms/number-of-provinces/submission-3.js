class Solution {
    /**
     * @param {number[][]} isConnected
     * @return {number}
     */
    findCircleNum(isConnected) {
        class unionFind {
            constructor(n) {
                this.parent = Array.from({ length: n }, (_, i) => i);
                this.rank = new Array(n).fill(0);
            }
            find(x) {
                // path compression
                if (this.parent[x] != x) this.parent[x] = this.find(this.parent[x]);

                return this.parent[x];
            }
            union(a, b) {
                let ra = this.find(a);
                let rb = this.find(b);
                console.log("=====union:", { a, b, ra, rb });
                if (ra === rb) return false;

                // make sure ra is always higer rank
                if (this.rank[ra] < this.rank[rb]) [ra, rb] = [rb, ra];

                // shorter tree under higher tree
                this.parent[rb] = ra;

                // update rank
                if (this.rank[ra] == this.rank[rb]) this.rank[ra]++;
                console.log("parent:", this.parent, this.rank);

                return true; // merge
            }
            parent() {
                return this.parent;
            }
        }

        let count = isConnected.length;
        const uf = new unionFind(isConnected.length);

        for (let i = 0; i < isConnected.length; i++) {
            for (let j = 0; j < isConnected[0].length; j++) {
                if (isConnected[i][j] != 1) continue;

                if (uf.union(i, j)) {
                    // union true when merge; merge means 1 less province
                    count--;
                }
            }
        }

        return count;
    }
}
